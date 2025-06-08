#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let player;
const sleep = (ms = 4300) => new Promise((r) => setTimeout(r,ms));
    
async function welcome() {
    const rainbowTitle = chalkAnimation.glitch(
        'Welcome to the terminal chatting . Absolutely safe and sound \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue('How to chat')}
        I am a program in your local computer.
        and you know what you cannot ${chalk.bgRed('block')} me
        so get your attention here only.....
    `);
}
await welcome()
async function option() {
    const answer = await inquirer.prompt({
        name : 'Friends_name',
        type: 'list',
        message: 'Select the person you wanna chat with using arrow keys : ',
        choices: [
            'Yash',
            'Ayan',
            'Anvi',
        ]
    });
    
    return handleAnswer(answer.Friends_name == 'Yash');
}
async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Establishing connection').start();
    await sleep();
    
    if (isCorrect){
        spinner.success({ text:`Link established ${player}`})
    } else {
        spinner.error({text: `Error 404. Connection failed ${player}`});
        process.exit(1);
    }
}
function linked(){
    const msg = `You can now start texting WOOHOOO !!`;
    figlet(msg,(err,data) =>
    {
        console.log(gradient.pastel.multiline(data));
    });
}
await option();
await linked();