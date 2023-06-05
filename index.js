const { Events, GatewayIntentBits, IntentsBitField, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js')
const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMembers,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ] 
});

// Login do bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.username}.`)
});
client.login("MTA5OTgzMzU0MzE5NjE2NDE4Nw.GTlJ71.lzOpFUs9Wx8Gtz1MtOmefi0eWccaPL2AeSQBbk"); //token

client.on('messageCreate', async (message) => {
    if(message.author.bot) return;

    const channel = message.guild.channels.cache.get("1099170374324850688")

    if (message.content === 'registro message'){
        channel.send({ embeds: [
            new EmbedBuilder()
                .setColor('#7b359c')
                .setTitle('faça seu registro na Illusion Squad')
                .setDescription(`
                    Selecione os cargos que dseja abaixo. Após completar o seu registro os canais do servidor serão disponibilizados.
                `)
                .setThumbnail('https://media.discordapp.net/attachments/1074354811861995590/1099857242343354428/zyro-image.png?width=483&height=479')
                .setTimestamp()
                .setFooter({ text: 'Developed by Illusion Squad' })
        ] })
    }

    if (message.content === 'Linguagens de Programação'){

        const select = new StringSelectMenuBuilder()
			.setCustomId('linguagens')
			.setPlaceholder('Selecione às suas linguagens de programação')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('JavaScript')
					.setDescription('Linguagem JavaScript')
					.setValue('JavaScript'),

				new StringSelectMenuOptionBuilder()
					.setLabel('Python')
					.setDescription('Linguagem Python')
					.setValue('Python'),

				new StringSelectMenuOptionBuilder()
					.setLabel('Lua')
					.setDescription('Linguagem Lua')
					.setValue('Lua'),

                new StringSelectMenuOptionBuilder()
					.setLabel('Java')
					.setDescription('Linguagem Java')
					.setValue('Java'),

                new StringSelectMenuOptionBuilder() 
					.setLabel('Kotlin')
					.setDescription('Linguagem Kotlin')
					.setValue('Kotlin'),

                new StringSelectMenuOptionBuilder()
					.setLabel('Html e Css')
					.setDescription('Linguagens Html e Css')
					.setValue('Html'),

                new StringSelectMenuOptionBuilder()
					.setLabel('C, C++ ou C#')
					.setDescription('Linguagens C, C++ e C#')
					.setValue('ccc'),

                new StringSelectMenuOptionBuilder()
					.setLabel('Php')
					.setDescription('Linguagem Php')
					.setValue('Php'),

                new StringSelectMenuOptionBuilder()
					.setLabel('Ruby')
					.setDescription('Linguagem Ruby')
					.setValue('Ruby'),
            );

        const row = new ActionRowBuilder()
			.addComponents(select);

        channel.send({ embeds: [
            new EmbedBuilder()
                .setColor('#7b359c')
                .setTitle('Linguegens de programação')
                .setDescription('Selecione as suas linguagens de programação.')
        ], components: [row]});
    } else if (message.content === 'Generoooo'){
        const select = new StringSelectMenuBuilder()
        .setCustomId('genero')
        .setPlaceholder('Escolha o seu gênero')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Homem')
                .setDescription('Genero Homem')
                .setValue('homem'),

            new StringSelectMenuOptionBuilder()
                .setLabel('Mulher')
                .setDescription('Genero Mulher')
                .setValue('mulher'),

            new StringSelectMenuOptionBuilder()
                .setLabel('Não Binário')
                .setDescription('Genero Não Binário')
                .setValue('naobi'),
        );

    const row = new ActionRowBuilder()
        .addComponents(select);

    channel.send({ embeds: [
        new EmbedBuilder()
            .setColor('#7b359c')
            .setTitle('Seu gênero')
            .setDescription('Selecione o gênero no qual você se identifica.')
    ], components: [row]});
    } else if (message.content === 'Idadeeee'){
        const select = new StringSelectMenuBuilder()
        .setCustomId('idade')
        .setPlaceholder('Escolha a sua idade')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Menor de 18')
                .setDescription('Menor de 18 anos')
                .setValue('menor'),

            new StringSelectMenuOptionBuilder()
                .setLabel('Maior de 18')
                .setDescription('Maior de 18 anos')
                .setValue('maior'),
        );

    const row = new ActionRowBuilder()
        .addComponents(select);

    channel.send({ embeds: [
        new EmbedBuilder()
            .setColor('#7b359c')
            .setTitle('Sua idade')
            .setDescription('Selecione a sua idade atual.')
    ], components: [row]});
    } else if (message.content === 'Sexualidadeeee'){
        const select = new StringSelectMenuBuilder()
        .setCustomId('sexualidade')
        .setPlaceholder('Escolha a sua sexualidade')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Hétero')
                .setDescription('Você é hétero')
                .setValue('hetero'),

            new StringSelectMenuOptionBuilder()
                .setLabel('lgbt+')
                .setDescription('Você é Lgbt+')
                .setValue('lgbt'),
        );

    const row = new ActionRowBuilder()
        .addComponents(select);

    channel.send({ embeds: [
        new EmbedBuilder()
            .setColor('#7b359c')
            .setTitle('Sua sexualidade')
            .setDescription('Selecione a sua sexualidade.')
    ], components: [row]});
    }
    
    
    if (message.content === 'Finalizar registro'){
        const fim = new ButtonBuilder()
            .setCustomId('fim')
            .setLabel('Finalizar Registro')
            .setStyle(ButtonStyle.Secondary);

        const row = new ActionRowBuilder()
            .addComponents(fim)

        channel.send({ embeds: [
            new EmbedBuilder()
                .setColor('#7b359c')
                .setTitle('Finalizar o seu registro')
                .setDescription('Se você já selecionou todos os cargos sem erro, clique aqui para poder vizualizar os canais do servidor')
                .setTimestamp()
                .setFooter({ text: 'Developed by Illusion Squad' })
        ], components: [row] })
    }
})

client.on("interactionCreate", async (interaction) => {

    if (interaction.isStringSelectMenu()) {

        const value = interaction.values[0]

		if(interaction.customId === 'linguagens'){
            if (value === 'JavaScript'){
                interaction.member.roles.add('1099841369788391425')
                interaction.reply({ content: 'cargo adicionado javascript', ephemeral: true })
            } else if (value === 'Lua'){
                interaction.member.roles.add('1099841603469852672')
                interaction.reply({ content: 'cargo adicionado lua', ephemeral: true })
            } else if (value === 'Python'){
                interaction.member.roles.add('1099841406769582181')
                interaction.reply({ content: 'cargo adicionado python', ephemeral: true })
            } else if (value === 'Java'){
                interaction.member.roles.add('1099841410582204457')
                interaction.reply({ content: 'cargo adicionado java', ephemeral: true })
            } else if (value === 'Php'){
                interaction.member.roles.add('1099841602568073216')
                interaction.reply({ content: 'cargo adicionado php', ephemeral: true })
            } else if (value === 'Ruby'){
                interaction.member.roles.add('1099841413123936257')
                interaction.reply({ content: 'cargo adicionado ruby', ephemeral: true })
            } else if (value === 'ccc'){
                interaction.member.roles.add('1099841412234743858')
                interaction.reply({ content: 'cargo adicionado c, c++ ou c#', ephemeral: true })
            } else if (value === 'Html'){
                interaction.member.roles.add('1099841408153694219')
                interaction.reply({ content: 'cargo adicionado html e css', ephemeral: true })
            } else if (value === 'Kotlin'){
                interaction.member.roles.add('1099841409462308884')
                interaction.reply({ content: 'cargo adicionado kotlin', ephemeral: true })
            }
        }

        if (interaction.customId === 'genero'){
            if (value === 'homem'){
                interaction.member.roles.add('1099846710487945307')
                interaction.reply({ content: 'cargo adicionado homem', ephemeral: true })
            } else if (value === 'mulher'){
                interaction.member.roles.add('1099846711700099122')
                interaction.reply({ content: 'cargo adicionado mulher', ephemeral: true })
            } else if (value === 'naobi') {
                interaction.member.roles.add('1099846712861933648')
                interaction.reply({ content: 'cargo adicionado não binário', ephemeral: true })
            }
        }

        if (interaction.customId === 'idade'){
            if (value === 'menor'){
                interaction.member.roles.add('1099846717865742426')
                interaction.reply({ content: 'cargo adicionado -18', ephemeral: true })
            } else if (value === 'maior'){
                interaction.member.roles.add('1099846715441414154')
                interaction.reply({ content: 'cargo adicionado +18', ephemeral: true })
            }
        }

        if (interaction.customId === 'sexualidade'){
            if (value === 'hetero'){
                interaction.member.roles.add('1099846723402211458')
                interaction.reply({ content: 'cargo adicionado hetero', ephemeral: true })
            } else if (value === 'lgbt'){
                interaction.member.roles.add('1099846724467560598')
                interaction.reply({ content: 'cargo adicionado lgbt+', ephemeral: true })
            } 
        }
	}

    if(interaction.isButton()){
        if (interaction.customId === 'fim'){
            interaction.member.roles.add('1099846722198442044')
            interaction.reply({ content: 'cargo adicionado registrado', ephemeral: true })
        }
    }
})
//fim dos comandos

client.on('ready', () => {
    client.user.setActivity(`Registre-se`)
    client.user.setStatus("dnd");
});
