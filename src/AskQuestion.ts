import readline from 'readline';

let rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

export function askQuestion(question: string): Promise<string> {
    
    return new Promise((resolve, reject) => {
        
        rl.question(
            `\n*-*-*-*-*-*-*-*-*\n${question}`,
            (answer) => {
                rl.close();
                resolve(answer);
            }
        );        
    })
}