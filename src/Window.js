export default class Window
{
	constructor(title, text, style) {
		this.title = title;
		this.text = text;
		if (!style) {
			style = 'primary';
		}
		this.style = style;
		this.id = null;
	}

}