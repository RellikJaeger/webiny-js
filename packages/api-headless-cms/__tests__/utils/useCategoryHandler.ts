import { useContentGqlHandler } from "./useContentGqlHandler";

const categoryFields = `
    id
    createdOn
    savedOn
    meta {
        title
        modelId
        version
        locked
        publishedOn
        status
        revisions {
            id
            title
            slug
        }
    }
    # user defined fields
    title
    slug
`;

const errorFields = `
    error {
        code
        message
    }
`;

const getCategoryQuery = /* GraphQL */ `
    query GetCategory($where: CategoryGetWhereInput!) {
        getCategory(where: $where) {
            data {
                ${categoryFields}
            }
            ${errorFields}
        }
    }
`;

const listCategoriesQuery = /* GraphQL */ `
    query ListCategories(
        $where: CategoryListWhereInput
        $sort: [CategoryListSorter]
        $limit: Int
        $after: String
    ) {
        listCategories(where: $where, sort: $sort, limit: $limit, after: $after) {
            data {
                ${categoryFields}
            }
            meta {
                cursor
                hasMoreItems
                totalCount
            }
            ${errorFields}
        }
    }
`;

const createCategoryMutation = /* GraphQL */ `
    mutation CreateCategory($data: CategoryInput!) {
        createCategory(data: $data) {
            data {
                ${categoryFields}
            }
            ${errorFields}
        }
    }
`;

const createCategoryFromMutation = /* GraphQL */ `
    mutation CreateCategoryFrom($revision: ID!) {
        createCategoryFrom(revision: $revision) {
            data {
                ${categoryFields}
            }
            ${errorFields}
        }
    }
`;

const updateCategoryMutation = /* GraphQL */ `
    mutation UpdateCategory($revision: ID!, $data: CategoryInput!) {
        updateCategory(revision: $revision, data: $data) {
            data {
                ${categoryFields}
            }
            ${errorFields}
        }
    }
`;

const deleteCategoryMutation = /* GraphQL */ `
    mutation DeleteCategory($id: ID!) {
        deleteCategory(id: $id) {
            data
            ${errorFields}
        }
    }
`;

export const useCategoryHandler = options => {
    const contentHandler = useContentGqlHandler(options);

    return {
        ...contentHandler,
        async getCategory(variables) {
            return await contentHandler.invoke({
                body: { query: getCategoryQuery, variables }
            });
        },
        async listCategories(variables) {
            return await contentHandler.invoke({
                body: { query: listCategoriesQuery, variables }
            });
        },
        async createCategory(variables) {
            return await contentHandler.invoke({
                body: { query: createCategoryMutation, variables }
            });
        },
        async createCategoryFrom(variables) {
            return await contentHandler.invoke({
                body: { query: createCategoryFromMutation, variables }
            });
        },
        async updateCategory(variables) {
            return await contentHandler.invoke({
                body: {
                    query: updateCategoryMutation,
                    variables
                }
            });
        },
        async deleteCategory(variables) {
            return await contentHandler.invoke({
                body: {
                    query: deleteCategoryMutation,
                    variables
                }
            });
        }
    };
};