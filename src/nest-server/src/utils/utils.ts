import { readFileSync, writeFileSync } from 'fs';

const ID_PATH = 'src/nest-server/src/utils/id.txt';

export default function getId(): number | undefined {
    try {
        const file = readFileSync(ID_PATH, 'utf-8');
        const { id } = JSON.parse(file) as { id: number };
        writeFileSync(ID_PATH, JSON.stringify({ id: id + 1 }, null, 2));
        return id;
    } catch (err: any) {
        console.error(err.message);
        return undefined;
    }
}