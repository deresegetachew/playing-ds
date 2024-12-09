let englishWords: Set<string>;

const __dirname = new URL(".", import.meta.url).pathname;

async function isShrinkable(str: string): Promise<boolean> {
    // load dictionary
    const wordsTxt = await Deno.readTextFile(`${__dirname}/words.txt`);

    if (!wordsTxt) {
        throw new Error("Unable to read words.txt");
    }

    englishWords = new Set(wordsTxt.split("\n"));

    if (str === "") {
        return false;
    }

    const words = isShrinkableHelper(str);
    console.log(words);

    return words.length === str.length;
}

function isShrinkableHelper(str: string): string[] {
    const validWords: string[] = [];

    if (_internals.isValidWord(str.toLocaleLowerCase()) && str.length === 1) {
        return [str];
    } else {
        if (
            str.length === 1 && !_internals.isValidWord(str.toLocaleLowerCase())
        ) {
            return [];
        }

        for (const [index] of [...str].entries()) {
            const reduced = `${str.substring(0, index)}${
                str.substring(index + 1)
            }`;

            if (_internals.isValidWord(reduced.toLocaleLowerCase())) {
                validWords.push(reduced);
                _internals.isShrinkableHelper(reduced);
            }
        }

        return validWords;
    }
}

function isValidWord(str: string): boolean {
    return englishWords.has(str);
}

export const _internals = {
    isShrinkable,
    isShrinkableHelper,
    isValidWord,
};
