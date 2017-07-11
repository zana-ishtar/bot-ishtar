// Description:
//   TODO を管理することができるボットです
// Commands:
//   ボット名 todo     - TODO を作成
//   ボット名 done     - TODO を完了にする
//   ボット名 del      - TODO を消す
//   ボット名 list     - TODO の一覧表示
//   ボット名 donelist - 完了した TODO の一覧表示
'use strict';
const todo = require('todo');

module.exports = (robot) => {
    robot.respond(/todo (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.todo(task);
        msg.send('"' + task + '"' + ' この情報を追加したわ');
    });

    robot.respond(/done (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.done(task);
        msg.send('"' + task + '"' + ' を完了させたわ'); 
    });

    robot.respond(/del (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.del(task);
        msg.send('"' + task + '"' + ' は冥界行きよ！');
    });

    robot.respond(/list/i, (msg) => {
        const list = todo.list();
        if (list.length === 0) {
        msg.send('今は何もないわ。早く情報を追加しなさい。');
		} else if (list.length === 1) {
		msg.send('"' + list + '" だけしか登録してないわ');
		} else {
        msg.send('"' + list.join('"' + '\n' + '"') + ('"' + ' だわ') );
        }
    });
    
    robot.respond(/donelist/i, (msg) => {
        const donelist = todo.donelist();
        if (donelist.length === 0) {
        msg.send('完了した情報は何もないわ。すぐに行動しなさい。');
		} else if (donelist.length === 1){
		msg.send('"' + donelist + '" だけしか完了してないわ');
	    } else {
        msg.send(('完了済みの情報、一覧よ。' + '\n') + ('"' + donelist.join('"' + '\n' + '"')) + ('"') ) ;
        }
    });
    
            //respond関数：hubotの名前を呼ぶと機能する
            //            複数botがあると紛らわしくなるから

};
