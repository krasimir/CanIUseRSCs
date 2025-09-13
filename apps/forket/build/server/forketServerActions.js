import { saveSelectedTrack as f_71 } from "./app/cases/12/Page.tsx";
import { updateUsername as f_70 } from "./app/cases/08/actions.ts";
import { updateMyName as f_69 } from "./app/cases/07/actions.ts";
import { createNoteAction as f_68 } from "./app/cases/06/Page.tsx";
import { getLikeCount as f_67 } from "./app/cases/05/actions.ts";
import { incrementLike as f_66 } from "./app/cases/05/actions.ts";
import { getLikeCount as f_65 } from "./app/cases/04/actions.ts";
import { incrementLike as f_64 } from "./app/cases/04/actions.ts";
import FormDataFallback from 'form-data';
import multer from "multer";
const actions = {
    $FSA_f_42_incrementLike: f_64,
    $FSA_f_43_getLikeCount: f_65,
    $FSA_f_61_incrementLike: f_66,
    $FSA_f_46_getLikeCount: f_67,
    $FSA_f_48_createNoteAction: f_68,
    $FSA_f_62_updateMyName: f_69,
    $FSA_f_63_updateUsername: f_70,
    $FSA_f_59_saveSelectedTrack: f_71
};
const fromDataHandler = multer({
    storage: multer.memoryStorage()
});
export default async function forketServerActions(req, res) {
    fromDataHandler.any()(req, res, async ()=>{
        res.setHeader("Content-Type", "application/json");
        if (!req.body && !req.files) {
            console.warn(`‎𐂐 Forket: the request object has no body.`);
            res.status(400).json({
                error: "No body provided"
            });
            return;
        }
        if (!req.body.__actionId) {
            console.warn(`‎𐂐 Forket: the request object body has no id.`);
            res.status(400).json({
                error: "No id provided"
            });
            return;
        }
        const id = req.body.__actionId;
        const actionArgs = parseArgs(req.body.__args);
        const kind = req.body.__kind || "json";
        try {
            const context = {
                request: req,
                response: res
            };
            const args = [];
            if (kind === "formdata") {
                let fd;
                if (typeof FormData !== 'undefined') {
                    fd = new FormData();
                } else {
                    fd = new FormDataFallback();
                }
                for (const [key, value] of Object.entries(req.body)){
                    fd.append(key, value);
                }
                args.push(fd);
            } else {
                actionArgs.forEach((a)=>{
                    if (typeof a === 'object' && a && a.__fd === true) {
                        let fd;
                        if (typeof FormData !== "undefined") {
                            fd = new FormData();
                        } else {
                            fd = new FormDataFallback();
                        }
                        Object.keys(a).forEach((k)=>{
                            if (k === '__fd') return;
                            fd.append(k, a[k]);
                        });
                        args.push(fd);
                        return;
                    }
                    args.push(a);
                });
            }
            args.push(context);
            const result = await actions[id](...args);
            res.status(200).json({
                result
            });
        } catch (error) {
            console.error(`‎𐂐 Forket: error in server action ${id}:`, error);
            res.status(200).json({
                error: error.message || `Error in server action ${id}`
            });
        }
    });
}
function parseArgs(str) {
    if (!str) return [];
    let args = [];
    try {
        args = JSON.parse(str);
    } catch (e) {
        console.warn(`‎𐂐 Forket: could not parse action args:`, e);
    }
    return args;
}
