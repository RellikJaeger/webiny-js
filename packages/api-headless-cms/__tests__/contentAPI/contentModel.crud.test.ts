import {
    CmsContentModelFieldInputType,
    CmsContentModelGroupType
} from "@webiny/api-headless-cms/types";
import mdbid from "mdbid";
import { useContentGqlHandler } from "../utils/useContentGqlHandler";
import * as helpers from "../utils/helpers";
import models from "./mocks/contentModels";
import { useCategoryManageHandler } from "../utils/useCategoryManageHandler";

const getTypeFields = type => {
    return type.fields.filter(f => f.name !== "_empty").map(f => f.name);
};

const getTypeObject = (schema, type) => {
    return schema.types.find(t => t.name === type);
};

jest.setTimeout(15000);

describe("content model test", () => {
    const esCmsIndex = "root-headless-cms";
    const readHandlerOpts = { path: "read/en-US" };
    const manageHandlerOpts = { path: "manage/en-US" };

    const {
        createContentModelMutation,
        updateContentModelMutation,
        createContentModelGroupMutation,
        elasticSearch
    } = useContentGqlHandler(manageHandlerOpts);

    let contentModelGroup: CmsContentModelGroupType;

    beforeEach(async () => {
        const [createCMG] = await createContentModelGroupMutation({
            data: {
                name: "Group",
                slug: "group",
                icon: "ico/ico",
                description: "description"
            }
        });
        contentModelGroup = createCMG.data.createContentModelGroup.data;
        try {
            await elasticSearch.indices.create({ index: esCmsIndex });
        } catch {
            // Ignore errors
        }
    });

    afterEach(async () => {
        try {
            await elasticSearch.indices.delete({ index: esCmsIndex });
        } catch {}
    });

    test("base schema should only contain relevant queries and mutations", async () => {
        // create a "read" and "manage" endpoints
        const readAPI = useContentGqlHandler(readHandlerOpts);
        const manageAPI = useContentGqlHandler(manageHandlerOpts);

        const [read] = await readAPI.introspect();
        const [manage] = await manageAPI.introspect();

        const readSchema = read.data.__schema;
        const manageSchema = manage.data.__schema;

        const ReadQuery = getTypeObject(readSchema, "Query");
        const ManageQuery = getTypeObject(manageSchema, "Query");
        const ReadMutation = getTypeObject(readSchema, "Mutation");
        const ManageMutation = getTypeObject(manageSchema, "Mutation");

        expect(getTypeFields(ReadQuery)).toEqual(["getContentModel", "listContentModels"]);
        expect(getTypeFields(ManageQuery)).toEqual([
            "getContentModel",
            "listContentModels",
            "getContentModelGroup",
            "listContentModelGroups"
        ]);
        expect(getTypeFields(ReadMutation)).toEqual([]);
        expect(getTypeFields(ManageMutation)).toEqual([
            "createContentModel",
            "updateContentModel",
            "deleteContentModel",
            "createContentModelGroup",
            "updateContentModelGroup",
            "deleteContentModelGroup"
        ]);
    });

    test("create, read, update, delete and list content models", async () => {
        const {
            createContentModelMutation,
            getContentModelQuery,
            updateContentModelMutation,
            listContentModelsQuery,
            deleteContentModelMutation
        } = useContentGqlHandler(manageHandlerOpts);

        const [createResponse] = await createContentModelMutation({
            data: {
                name: "Content model",
                modelId: "content-model",
                group: contentModelGroup.id
            }
        });

        expect(createResponse).toEqual({
            data: {
                createContentModel: {
                    data: {
                        name: "Content model",
                        description: null,
                        titleFieldId: null,
                        modelId: "contentModel",
                        createdBy: helpers.identity,
                        createdOn: expect.stringMatching(/^20/),
                        savedOn: expect.stringMatching(/^20/),
                        fields: [],
                        layout: [],
                        group: {
                            id: contentModelGroup.id,
                            name: contentModelGroup.name
                        }
                    },
                    error: null
                }
            }
        });
        const createdContentModel = createResponse.data.createContentModel.data;

        const [getResponse] = await getContentModelQuery({
            modelId: createdContentModel.modelId
        });

        expect(getResponse).toEqual({
            data: {
                getContentModel: {
                    data: createResponse.data.createContentModel.data,
                    error: null
                }
            }
        });

        // nothing is changed in this update - just the date
        const [updateResponse] = await updateContentModelMutation({
            modelId: createdContentModel.modelId,
            data: {
                fields: [],
                layout: []
            }
        });

        expect(updateResponse).toEqual({
            data: {
                updateContentModel: {
                    data: {
                        ...createResponse.data.createContentModel.data,
                        savedOn: expect.stringMatching(/^20/)
                    },
                    error: null
                }
            }
        });

        // change some values in content model
        const [changedUpdateResponse] = await updateContentModelMutation({
            modelId: createdContentModel.modelId,
            data: {
                name: "changed name",
                description: "changed description",
                fields: [],
                layout: []
            }
        });

        const updatedContentModel = {
            ...createdContentModel,
            name: "changed name",
            description: "changed description",
            savedOn: expect.stringMatching(/^20/)
        };

        expect(changedUpdateResponse).toEqual({
            data: {
                updateContentModel: {
                    data: updatedContentModel,
                    error: null
                }
            }
        });

        const [listResponse] = await listContentModelsQuery();

        expect(listResponse).toEqual({
            data: {
                listContentModels: {
                    data: [updatedContentModel],
                    error: null
                }
            }
        });

        const [deleteResponse] = await deleteContentModelMutation({
            modelId: updatedContentModel.modelId
        });

        expect(deleteResponse).toEqual({
            data: {
                deleteContentModel: {
                    data: true,
                    error: null
                }
            }
        });
    });

    test("delete existing content model", async () => {
        const { createContentModelMutation, deleteContentModelMutation } = useContentGqlHandler(
            manageHandlerOpts
        );

        const [createResponse] = await createContentModelMutation({
            data: {
                name: "Content model",
                modelId: "content-model",
                group: contentModelGroup.id
            }
        });

        const contentModel = createResponse.data.createContentModel.data;

        const [response] = await deleteContentModelMutation({
            modelId: contentModel.modelId
        });

        expect(response).toEqual({
            data: {
                deleteContentModel: {
                    data: true,
                    error: null
                }
            }
        });
    });

    test("cannot delete content model that has entries", async () => {
        const { deleteContentModelMutation } = useContentGqlHandler(manageHandlerOpts);
        const { createCategory, until, listCategories } = useCategoryManageHandler(
            manageHandlerOpts
        );
        const category = models.find(m => m.modelId === "category");

        // Create initial record
        const [createContentModelResponse] = await createContentModelMutation({
            data: {
                name: category.name,
                modelId: category.modelId,
                group: contentModelGroup.id
            }
        });

        const [updateContentModelResponse] = await updateContentModelMutation({
            modelId: createContentModelResponse.data.createContentModel.data.modelId,
            data: {
                fields: category.fields,
                layout: category.layout
            }
        });

        const model = updateContentModelResponse.data.updateContentModel.data;

        await createCategory({
            data: {
                title: "Category",
                slug: "title"
            }
        });

        // If this `until` resolves successfully, we know entry is accessible via the "read" API
        await until(
            () => listCategories().then(([data]) => data),
            ({ data }) => data.listCategories.data.length === 1,
            { name: "list categories to check ES has indexed newly created" }
        );

        const [response] = await deleteContentModelMutation({
            modelId: model.modelId
        });

        expect(response).toEqual({
            data: {
                deleteContentModel: {
                    data: null,
                    error: {
                        message: `Cannot delete content model "${model.modelId}" because there are existing entries.`,
                        code: "CONTENT_MODEL_BEFORE_DELETE_HOOK_FAILED",
                        data: null
                    }
                }
            }
        });
    });

    test("get existing content model", async () => {
        const { createContentModelMutation, getContentModelQuery } = useContentGqlHandler(
            manageHandlerOpts
        );

        const [createResponse] = await createContentModelMutation({
            data: {
                name: "Content model",
                modelId: "content-model",
                group: contentModelGroup.id
            }
        });

        const contentModel = createResponse.data.createContentModel.data;

        const [response] = await getContentModelQuery({
            modelId: contentModel.modelId
        });

        expect(response).toEqual({
            data: {
                getContentModel: {
                    data: {
                        ...contentModel
                    },
                    error: null
                }
            }
        });
    });

    test("error when getting non-existing model", async () => {
        const { getContentModelQuery } = useContentGqlHandler(manageHandlerOpts);
        const modelId = "nonExistingId";
        const [response] = await getContentModelQuery({
            modelId
        });

        expect(response).toEqual({
            data: {
                getContentModel: {
                    data: null,
                    error: {
                        message: `Content model "${modelId}" was not found!`,
                        code: "NOT_FOUND",
                        data: null
                    }
                }
            }
        });
    });

    test("error when updating non-existing model", async () => {
        const { updateContentModelMutation } = useContentGqlHandler(manageHandlerOpts);
        const modelId = "nonExistingId";
        const [response] = await updateContentModelMutation({
            modelId,
            data: {
                name: "new name",
                fields: [],
                layout: []
            }
        });

        expect(response).toEqual({
            data: {
                updateContentModel: {
                    data: null,
                    error: {
                        message: `Content model "${modelId}" was not found!`,
                        code: "NOT_FOUND",
                        data: null
                    }
                }
            }
        });
    });

    test("error when deleting non-existing model", async () => {
        const { deleteContentModelMutation } = useContentGqlHandler(manageHandlerOpts);

        const modelId = "nonExistingId";
        const [response] = await deleteContentModelMutation({
            modelId
        });

        expect(response).toEqual({
            data: {
                deleteContentModel: {
                    data: null,
                    error: {
                        message: `Content model "${modelId}" was not found!`,
                        code: "NOT_FOUND",
                        data: null
                    }
                }
            }
        });
    });

    test("update content model with new fields", async () => {
        const { createContentModelMutation, updateContentModelMutation } = useContentGqlHandler(
            manageHandlerOpts
        );
        const [createResponse] = await createContentModelMutation({
            data: {
                name: "Content model",
                modelId: "content-model",
                group: contentModelGroup.id
            }
        });

        const contentModel = createResponse.data.createContentModel.data;

        const textField: CmsContentModelFieldInputType = {
            id: mdbid(),
            fieldId: "textField",
            label: "Text field",
            helpText: "help text",
            multipleValues: false,
            placeholderText: "placeholder text",
            predefinedValues: {
                enabled: false,
                values: []
            },
            renderer: {
                name: "rendererName"
            },
            settings: {},
            type: "text",
            validation: []
        };
        const numberField: CmsContentModelFieldInputType = {
            id: mdbid(),
            fieldId: "numberField",
            label: "Number field",
            helpText: "number help text",
            multipleValues: false,
            placeholderText: "number placeholder text",
            predefinedValues: {
                enabled: false,
                values: []
            },
            renderer: {
                name: "rendererName"
            },
            settings: {},
            type: "number",
            validation: []
        };

        const fields = [textField, numberField];
        const [response] = await updateContentModelMutation({
            modelId: contentModel.modelId,
            data: {
                name: "new name",
                fields,
                layout: fields.map(field => {
                    return [field.id];
                })
            }
        });

        expect(response).toEqual({
            data: {
                updateContentModel: {
                    data: {
                        savedOn: expect.stringMatching(/^20/),
                        createdBy: helpers.identity,
                        createdOn: expect.stringMatching(/^20/),
                        description: null,
                        titleFieldId: "textField",
                        fields: [textField, numberField],
                        group: {
                            id: contentModelGroup.id,
                            name: "Group"
                        },
                        modelId: contentModel.modelId,
                        layout: [[textField.id], [numberField.id]],
                        name: "new name"
                    },
                    error: null
                }
            }
        });
    });

    test("error when assigning titleFieldId on non existing field", async () => {
        const { createContentModelMutation, updateContentModelMutation } = useContentGqlHandler(
            manageHandlerOpts
        );
        const [createResponse] = await createContentModelMutation({
            data: {
                name: "Content model",
                modelId: "content-model",
                group: contentModelGroup.id
            }
        });

        const contentModel = createResponse.data.createContentModel.data;

        const field: CmsContentModelFieldInputType = {
            id: mdbid(),
            fieldId: "field1",
            label: "Field 1",
            helpText: "help text",
            multipleValues: false,
            placeholderText: "placeholder text",
            predefinedValues: {
                enabled: false,
                values: []
            },
            renderer: {
                name: "rendererName"
            },
            settings: {},
            type: "text",
            validation: []
        };
        const [response] = await updateContentModelMutation({
            modelId: contentModel.modelId,
            data: {
                name: "new name",
                titleFieldId: "nonExistingTitleFieldId",
                fields: [field],
                layout: [[field.id]]
            }
        });

        expect(response).toEqual({
            data: {
                updateContentModel: {
                    data: null,
                    error: {
                        code: "VALIDATION_ERROR",
                        message: `Field "nonExistingTitleFieldId" does not exist in the model!`,
                        data: null
                    }
                }
            }
        });
    });
});
