import gql from "graphql-tag";
import { getPlugins } from "@webiny/plugins";
import { PbPageSettingsFieldsPlugin } from "@webiny/app-page-builder/types";

/**
 * We get all of the `PbPageSettingsFieldsPlugin` plugins, which contain different page-settings-related GraphQL fields.
 * You can check out the default plugins, that come from the `app-page-builder` package, on the following link:
 * https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder/src/render/plugins/pageSettings/index.ts
 */
export const GET_PUBLISHED_PAGE = () => {
    const pageSettingsFields = getPlugins("pb-page-settings-fields")
        .map((pl: PbPageSettingsFieldsPlugin) => pl.fields)
        .join("\n");

    return gql`
        query PbGetPublishedPage($id: ID, $url: String, $returnNotFoundPage: Boolean, $returnErrorPage: Boolean, $preview: Boolean) {
            pageBuilder {
                getPublishedPage(id: $id, url: $url, returnNotFoundPage: $returnNotFoundPage, returnErrorPage: $returnErrorPage, preview: $preview) {
                    data {
                        id
                        title
                        url
                        version
                        publishedOn
                        content
                        createdBy {
                            displayName
                        }
                        settings {
                            ${pageSettingsFields}
                        }
                    }
                    error {
                        code
                        message
                    }
                }
            }
        }
    `;
};
