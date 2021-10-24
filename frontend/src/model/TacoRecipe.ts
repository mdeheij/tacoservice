export default class TacoRecipe {
	name: string
	filename: string
	content: string
	category: string

	constructor(data?: TacoRecipe) {  //todo dit is raar, jezelf als constructor param? en nullable?
		this.name = data.name;
		this.filename = data.filename;
		this.content = data.content;
		this.category = data.category;
	}

	getTag(): string {
		return this.category.replace(/_/, ' ').replace(/s$/, '')
	}

	summary(): string {
		let summaryRaw = '';
		const splitted = this.content.split('\n');

		// splitted
		for (let i = 0; i < splitted.length && i < 9; i++) {
			if (this.name.toLowerCase() == splitted[i].toLowerCase()) {
				continue;
			}

			if (splitted[i] == '') {
				continue;
			}
			if (splitted[i].startsWith('====') || splitted[i].startsWith('##') || splitted[i].startsWith('---') || splitted[i].startsWith('![') ) {
				continue;
			}

			if (splitted[i].startsWith('Ingredients') || splitted[i].startsWith('Description')) {
				continue;
			}

			// console.log('Adding: ', splitted[i]);
			summaryRaw += splitted[i] + '\n';
		}

		return summaryRaw;
	}
}
