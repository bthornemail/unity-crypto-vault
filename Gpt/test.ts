import * as fs from 'node:fs';

const depth: number = 3;

function readFilesIntoWordArray(filenames: string[]): any {
    let data: string = '';
    filenames.forEach((file) => {
        data = data + " " + fs.readFileSync(`./${file}`, "utf8");
    });

    data = data.replace(/\r?\n|\r/g, " ");
    const replacements: string[] = [
        ",", ".", ":", "!", "?", '"', "“", "”", ";", "(", ")", "-", "_",
    ];
    replacements.forEach((value) => {
        data = data.replace(new RegExp("\\" + value, "g"), " " + value + " ");
    });

    let word_array: string[] = data.split(" ");
    word_array = word_array.filter((word) => word.trim().length != 0);
    return word_array;
}

let all_words: string[] = readFilesIntoWordArray([
    "hgwells.txt",
    "franklin.txt",
    "dickens.txt",
]);

type WordMap = { [key: string]: { [key: string]: number } };

function buildMap(tokens: string[], depth: number): WordMap {
    let map: WordMap = {};

    for (let index = 0; index < tokens.length - depth; index++) {
        let phrase: string = "";
        for (let depthIndex = 0; depthIndex < depth; depthIndex++) {
            const curr_word = tokens[depthIndex + index];
            phrase += " " + curr_word;
        }
        phrase = phrase.trimStart();

        if (!map[phrase]) {
            map[phrase] = {};
        }

        let next_word = tokens[index + depth];
        let next_word_list = map[phrase];
        if (!next_word_list[next_word]) {
            next_word_list[next_word] = 1;
        } else {
            next_word_list[next_word]++;
        }
    }

    return map;
}

let map: WordMap = buildMap(all_words, depth);

function choose_word_weighted(word_list: { [key: string]: number }): string {
    let keys: string[] = Object.keys(word_list);
    let sum_of_weights: number = keys.reduce((acc, key) => acc + word_list[key], 0);
    let random: number = Math.random() * sum_of_weights;
    let curr_word: string = "";

    keys.every((word) => {
        curr_word = word;
        random -= word_list[word];
        return random > 0;
    });

    return curr_word;
}

function suggest_word(start_phrase: string, word_map: WordMap): string {
    let word_list = word_map[start_phrase];
    let suggested_word: string = choose_word_weighted(word_list);
    return suggested_word;
}

function create_sentence(start_phrase: string, word_map: WordMap, sentence_length: number, depth: number): string {
    let sentence: string = "";
    for (let word_count = 0; word_count < sentence_length; word_count++) {
        let next_word = choose_word_weighted(word_map[start_phrase]);
        sentence += next_word + " ";
        let tokenized_phrase = start_phrase.split(" ");
        start_phrase = "";
        for (let i = 1; i < depth; i++) {
            start_phrase += tokenized_phrase[i] + " ";
        }
        start_phrase += next_word;
    }
    return sentence.trim();
}

let initial_phrase: string = "and then I";
let output: string = suggest_word(initial_phrase, map);
console.log(initial_phrase + ": " + output);

let sentence: string = create_sentence(initial_phrase, map, 50, depth);
console.log(initial_phrase + ": " + sentence);