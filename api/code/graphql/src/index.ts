import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { createHandler } from "@webiny/handler-aws";
import graphqlPlugins from "@webiny/handler-graphql";
import i18nPlugins from "@webiny/api-i18n/plugins";
import i18nContentPlugins from "@webiny/api-i18n-content/plugins";
import pageBuilderPlugins from "@webiny/api-page-builder/graphql";
import dbPlugins from "@webiny/handler-db";
import { DynamoDbDriver } from "@webiny/db-dynamodb";
import elasticSearch from "@webiny/api-plugin-elastic-search-client";
import fileManagerPlugins from "@webiny/api-file-manager/plugins";
// File storage S3 plugin for API file manager.
import fileManagerS3 from "@webiny/api-file-manager-s3";
import formBuilderPlugins from "@webiny/api-form-builder/plugins";
import securityPlugins from "./security";

import { PageHookPlugin } from "@webiny/api-page-builder/graphql/types";

export const handler = createHandler(
    graphqlPlugins({ debug: process.env.DEBUG }),
    elasticSearch({ endpoint: `https://${process.env.ELASTIC_SEARCH_ENDPOINT}` }),
    dbPlugins({
        table: process.env.DB_TABLE,
        driver: new DynamoDbDriver({
            documentClient: new DocumentClient({
                convertEmptyValues: true,
                region: process.env.AWS_REGION
            })
        })
    }),
    securityPlugins(),
    i18nPlugins(),
    i18nContentPlugins(),
    fileManagerPlugins(),
    // Add File storage S3 plugin for API file manager.
    fileManagerS3(),
    pageBuilderPlugins({
        renderingFunction: process.env.PB_RENDER_FUNCTION
    }),
    formBuilderPlugins(),

    {
        type: "pb-page-hook",
        afterPublish: () => {}
    } as PageHookPlugin
);
