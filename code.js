const { Client } = require("discord.js");
const options = { intents: ["GUILDS", "GUILD_MESSAGES"] };
const client = new Client(options);

client.on("ready", (message) => {
  console.log("Bot準備完了！");
});

//ここから


client.on('messageCreate', async message => {
    if (message.author.bot) return; // Botには反応しないようにする
    if (message.guild.id !== "1088853446280613940") return; // 指定のサーバー以外では動作しないようにする
    if (message.content.includes("8_Activated")) {
        message.channel.send("シュミレーションを開始します。\r\nバグが発生した場合は\r\n@　大仏#2732\r\nまでご連絡ください。ログを確認した上で修正いたします。\r\n\r\n8_Activated\r\nを入力することでこのメッセージに戻ることが出来ます。\r\n\r\nキャラクターシートを提出してください。\r\nいあきゃらのURLまたは画像データでの提出を推奨しています。\r\n\r\n提出できましたら\r\n8_ready\r\nを入力してください。");
    }
    if (message.content.includes("8_ready")) {
        message.channel.send("この先ページ番号は>8.000という風に表記します。\r\n不等号以下を半角で入力することでストーリーを進めることが出来ます。\r\nまた、コマンドを入力しないと先に進まないことを利用して、RPをすることもできます。\r\nダイスを振る場合、「ささ」と発言してください。\r\nシナリオを始める >8_start");
    }
    if (message.content.includes("8_start")) {
        message.channel.send("8_start\r\n「それでは、CoCシナリオ『せんか』始めさせていただきます。よろしくお願いします」\r\n次へ >8.000");
    }
    if (message.content.includes("8.000")) {
        message.channel.send("8.000\r\n気がつくと、見知らぬ部屋にいた。 あなたは全裸で、持ち物は何もない。\r\n ※眼鏡、入れ歯などは本体の一部とみなします。\r\n次へ>8.001\r\n");
    }
    if (message.content.includes("8.001")) {
        message.channel.send("8.001\r\n部屋の中にはゆりかごが一つ、本棚が一つ、机が一つ、そして部屋の中央に鎮座する巨大な円筒形の機械がある。\r\nまた、ドアがあり、その横にカウンターのような小窓、トイレがある。すべてが白で統一されている。\r\n\r\nゆりかごを見る >8.100\r\n本棚を見る >8.200\r\n机を見る >8.300\r\n円筒形の機械を見る >8.400\r\nドアを見る >8.500\r\nカウンターを見る >8.600\r\nトイレを見る >8.700\r\n");
    }
    if (message.content.includes("8.100")) {
        message.channel.send("8.100\r\nゆりかご\r\nちょうどあなたにぴったりな、大きなゆりかごだ。中の布団はふかふかで、いい匂いがする。 \r\n\r\n 眠る >8.101\r\n部屋の中央に戻る  >8.001\r\n");
    }
    if (message.content.includes("8.101")) {
        message.channel.send("8.101\r\n本当に眠る？ >8.102\r\n 部屋の中央に戻る  >8.001\r\n");
    }
    if (message.content.includes("8.102")) {
        message.channel.send("8.102\r\nおやすみなさい。\r\n揺籃編クリアです。\r\n\r\nhttps://discord.com/channels/1088853446280613940/1089803154234806312\r\n\r\n日記帳に以下を入力してください\r\n・本日使用したキャラ\r\n・「2.123」\r\n");
    }
    if (message.content.includes("8.200")) {
        message.channel.send("8.200\r\n本棚\r\n本棚にはなんの本も置かれていない。\r\n\r\n部屋の中央に戻る  >8.001");
    }
    if (message.content.includes("8.300")) {
        message.channel.send("8.300\r\n机\r\n 机の上には日記帳とペン、小さなメモパッドが置かれている。\r\n\r\n日記帳を見る >8.310\r\nメモパッドを見る >8.360\r\nペンを見る >8.390\r\n部屋の中央に戻る >8.001\r\n");
    }
    if (message.content.includes("8.310")) {
        message.channel.send("8.310\r\n日記帳\r\n新品の日記帳だ。何も書かれていない。\r\n何か書いてみようか？\r\n\r\n記入が終わった・何も記入しない >8.300\r\n");
    }
    if (message.content.includes("8.360")) {
        message.channel.send("8.360\r\nメモパッド\r\n裏にのりがついている、貼ってはがせるメモだ。 \r\n一枚目にはこう書かれている。 \r\n・お誕生日おめでとう。いかがお過ごしでしょうか。 \r\n・ご意見ご要望がある際は管理室へご連絡ください。\r\nhttps://discord.com/channels/1088853446280613940/1089219511451930804\r\n\r\nこれは一体……？ \r\n\r\n〈アイデア〉ロールを振ること\r\n成功 >8.361\r\n失敗 >8.371\r\n");
    }
    if (message.content.includes("8.361")) {
        message.channel.send("8.361\r\n成功 \r\nあなたは奇妙な感覚に襲われた。 \r\nメモを読んでいるあなたをずっと見つめている人がいる。\r\nあなたはその人を知らないが、その人はあなたのすべてを知っている。\r\nどこか懐かしく、そして理解し難い感覚に背筋がざわつく。\r\n〈正気度〉ロール（0/1） \r\n\r\n発狂した >8.914\r\n\r\n机の上を見る>8.300\r\nもう一度メモの内容を見る >8.370\r\n");
    }
    if (message.content.includes("8.370")) {
        message.channel.send("8.370\r\n裏にのりがついている、貼ってはがせるメモだ。 \r\n一枚目にはこう書かれている。 \r\n・お誕生日おめでとう。いかがお過ごしでしょうか。 \r\n・ご意見ご要望がある際は管理室へご連絡ください。\r\nhttps://discord.com/channels/1088853446280613940/1089219511451930804\r\n\r\n机の上を見る>8.300\r\n");
    }
    if (message.content.includes("8.371")) {
        message.channel.send("8.371\r\n失敗\r\n誰か他の人に対するメモなのだろう。 \r\n\r\n机の上を見る>8.300\r\nもう一度メモの内容を見る>8.360 ");
    }
    if (message.content.includes("8.390")) {
        message.channel.send("8.390\r\nペン\r\nスーパーで1本75円くらいで売られていそうな安っぽい油性ボールペンだ。 \r\n\r\n机の上を見る>8.300");
    }
    if (message.content.includes("8.400")) {
        message.channel.send("8.400\r\n円筒形の機械 \r\n2mほどの高さの円筒形の水槽で、上部と下部は金属で覆われている。\r\nちょうどあなたの腰の高さに操作盤がある。\r\n\r\n水槽の中を見る >8.401\r\n操作盤を見る >8.480\r\n部屋の中央に戻る >8.001\r\n");
    }
    if (message.content.includes("8.401")) {
        message.channel.send("8.401水槽の中を見る\r\n水槽の中には何かがあった。\r\nそれはすべてあなたがよく知るものだが、あなたがそれが何であるのかを認識しようとするとまたあなたがよく知る何かに変化するように思うのだ。\r\nあなたはどうしてもこれを見て理解することができない。\r\n〈正気度〉ロール（0/1）\r\n\r\n発狂した >8.914\r\n\r\n円筒形の機械を見る>8.400\r\n");
    }
    if (message.content.includes("8.480")) {
        message.channel.send("8.480\r\n操作盤を見る\r\n操作盤には0-6と書かれた7つのボタンと、それぞれに小さなランプがついている。\r\n今はどのランプも点灯していない。 ボタンを押しても特に反応はないようだ。 \r\n\r\n円筒形の機械を見る>8.400");
    }
    if (message.content.includes("8.500")) {
        message.channel.send("8.500\r\nドア\r\n白いドア。固く施錠されている。\r\nドアの中央にパネルがあり、こう書かれている。 \r\n「遡行試験終了時はこちらから退出してください」 \r\n「シュミレーターの制限が解除されていること、通電状態を確認して、0 番のボタンを押し込んでください」  \r\n\r\n部屋の中央に戻る >8.001");
    }
    if (message.content.includes("8.600")) {
        message.channel.send("8.600\r\nカウンター\r\n配膳口と言ってもいいだろう。小さなカウンターだ。横にインターホンがついている。\r\nカウンターにはカロリーメイトのような固形食料と水が置かれている。\r\n\r\nカウンターから外を覗く >8.610\r\n固形食糧を食べる >8.650\r\nインターホンを押す >8.660\r\n部屋の中央に戻る >8.001\r\n");
    }
    if (message.content.includes("8.610")) {
        message.channel.send("8.610\r\nカウンターから外を覗く\r\nカウンターから外を覗いても真っ白な壁が見えるだけである。しばらく待ってみても人が通る様子はない。\r\n\r\nカウンターを見る >8.600");
    }
    if (message.content.includes("8.650")) {
        message.channel.send("8.650\r\n固形食糧を食べる\r\nうま　うま  \r\nカウンターを見る >8.600");
    }
    if (message.content.includes("8.660")) {
        message.channel.send("8.660\r\nインターホンを押す\r\nインターホンを押すと、無機質な音声が応答した。 \r\n 『ご利用ありがとうございます。自動音声で対応いたします。ご要望・ご質問がある場合はオフィスアワー隨ｬ?第律逶ｮ縺九ｉ隨ｬ?匁律逶ｮ縲∽ｸ?譌･繧?蛻?牡縺励◆?堤分逶ｮ縺ｮ譎る俣』  \r\n自動音声は丁寧な調子で案内をしているが、あなたにそれを理解することはできないだろう。\r\n日本語のようではあるが、違う。それはあなたの知るどのような言語とも異なるものだ。\r\n〈正気度〉ロール（0/1）。  \r\n\r\n発狂した >8.914\r\nカウンターを見る >8.600");
    }
    if (message.content.includes("8.700")) {
        message.channel.send("8.700\r\nトイレ きれいな洋式の水洗トイレだ。ウォシュレット付き。紙もセットされている。\r\n\r\n使用する >8.710\r\n部屋の中央に戻る >8.001");
    }
    if (message.content.includes("8.710")) {
        message.channel.send("8.710\r\n使用する\r\nご利用どうも！\r\n部屋の中央に戻る >8.001");
    }
    if (message.content.includes("8.914")) {
        message.channel.send("8.914\r\n天井の隅から声が聞こえる。\r\n「人格の崩壊を検知しました。遡行試験を終了します」\r\n\r\nあなたは意識を失うだろう。\r\nあなたは先に進むことができなかったが、他の人、いや他の自分なら進めるだろうか？\r\nもう一度最初から始める >8.000");
    }
});


//ここまで

client.login(process.env.DISCORD_BOT_TOKEN);
