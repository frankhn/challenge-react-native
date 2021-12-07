export const UPDATE = (oldObject: any, updatedProperties: any) => ({
    ...oldObject,
    ...updatedProperties,
});


export const CONTEXT = (strg: any, updateobj: any) =>
    JSON.stringify(UPDATE(strg, { ...strg, ...updateobj }));

export const DELETE = (obj: any) => {
    for (const member in obj) {
        delete obj[member];
    }
    return obj;
};