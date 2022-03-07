import glob from "glob";

import common from "./common.mjs";


async function getAllRoutes(cwd) {
    let routes = [];
    // here, we slice the array to skip the first element and avoid recursive imports
    let directories = glob.sync("./**/", { absolute: true, cwd })
        .slice(1);

    for (const directory of directories) {
        let { default: imported } = await import(`${directory}/index.mjs`);

        routes.push(imported);
    }

    return routes;
}


export default Object.assign(common, {
    getAllRoutes
});
