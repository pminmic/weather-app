export const handleComma = (name) => {
    const sep = name.split(", ");
    if (sep.length === 1) return name;
    [sep[0], sep[1]] = [sep[1], sep[0]];
    let res = "";
    if (sep[0].includes("l'") || sep[0].includes("L'")) {
        sep[0] = "L'";
        res = sep.join("");

    }
    else {
        res = sep.join(" ");
    }

    return res[0].toUpperCase() + res.slice(1);
}