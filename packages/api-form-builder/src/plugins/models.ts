// @ts-nocheck
import { flow } from "lodash";
import { withStorage, withCrudLogs, withSoftDelete, withFields } from "@webiny/commodo";

import formModel from "./models/form.model";
import formSettings from "./models/formSettings.model";
import formSubmission from "./models/formSubmission.model";
import { HandlerContextPlugin } from "@webiny/handler/types";

export default (): HandlerContextPlugin => ({
    name: "context-models",
    type: "context",
    apply(context) {
        const driver = context.commodo && context.commodo.driver;

        if (!driver) {
            throw Error(
                `Commodo driver is not configured! Make sure you add a Commodo driver plugin to your service.`
            );
        }

        const createBase = ({ maxPerPage = 100 } = {}) =>
            flow(
                withFields({
                    id: context.commodo.fields.id()
                }),
                withStorage({ driver, maxPerPage }),
                withSoftDelete(),
                withCrudLogs()
            )();

        const FormSettings = formSettings({ createBase });
        const Form = formModel({ createBase, context, FormSettings });
        const FormSubmission = formSubmission({ createBase, Form });

        context.models = {
            Form,
            FormSettings,
            FormSubmission,
            createBase
        };
    }
});
