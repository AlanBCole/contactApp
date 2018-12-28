import readline from 'readline';

export function askQuestion(question: string): Promise<string> {
    
    let rl = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );
    
    return new Promise((resolve, reject) => {
        
        rl.question(
            `\n*-*-*-*-*-*-*-*-*\n${question}`,
            (answer) => {
                resolve(answer);
                rl.close();
            }
        );        
    })
}