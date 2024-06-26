/**
 * Represents a set of templates.
 */
import { Template } from './template';

export class TemplateSet {

	/** Default template set name */
	public static DEFAULT: string = "Default";

	/** List of templates in the set */
	private templates: Template[] = [];

	/**
	 * Creates an instance of TemplateSet.
	 * @param name - The name of the template set
	 */
	constructor(
		private name: string
	) { }

	/**
	 * Adds a template to the set.
	 * @param template - The template to add
	 */
	public addTemplate(template: Template): void {
		this.templates.push(template);
		this.templates.sort((a: Template, b: Template) => a.getName().localeCompare(b.getName()));
	}

	/**
	 * Removes a template from the set.
	 * @param template - The template to remove
	 */
	public removeTemplate(templateName: string): void {
		this.templates = this.templates.filter(t => t.getName() !== templateName);
	}

	/**
	 * Retrieves the templates in the set.
	 * @returns List of templates
	 */
	public getTemplates(): Template[] {
		return this.templates;
	}

	/**
	 * Retrieves a template by name.
	 * @param name - The name of the template to retrieve
	 * @returns The template with the specified name
	 */
	public getTemplate(name: string): Template {
		return this.templates.find(t => t.getName() === name);
	}

	/**
	 * Retrieves the name of the template set.
	 * @returns Name of the template set
	 */
	public getName(): string {
		return this.name;
	}
}