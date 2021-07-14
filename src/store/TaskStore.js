import { makeAutoObservable } from 'mobx';


export default class TaskStore {
	constructor() {
		this._tasks = []
		this._idCounter = this._tasks.length
		makeAutoObservable(this)

		this.pushSomeTasks(15)
	}

	pushSomeTasks(num) {
		const result = []
		const from = this._tasks.length + 1
		const to = num + from
		for (let i = from; i < to; i++) {
			result.push({
				id: i,
				name: 'Тестовая задача №' + i,
				priority: 'low',
				marks: ['design', 'dev', 'research'],
				descr: '...',
				date: this.__getDate(),
			})
		}
		this._tasks = this._tasks.concat(result)
	}

	/**
	 * @param {{ id: number; name: string; descr: string; date: string; priority: string; marks: string[]; }[]} value
	 */
	set tasks(value) {
		this._tasks = value
	}
	get tasks() {
		return this._tasks
	}

	/**
	 * @param { id: number; name: string; descr: string; date: string; priority: string; marks: string[]; } value
	 */
	addTask(value) {
		value.id = ++this._idCounter
		value.date = this.__getDate()
		this._tasks.push(value)
		return this._idCounter
	}

	getTask(id) {
		return this._tasks.find(task => task.id === parseInt(id))
	}

	getTaskIndex(id) {
		return this._tasks.findIndex(task => task.id === parseInt(id))
	}

	deleteTask(id) {
		const index = this.getTaskIndex(id)
		return this._tasks.splice(index, 1)
	}

	editTask(id, values) {
		const index = this.getTaskIndex(id)
		let edited = {
			...values,
			id: this._tasks[index].id,
			date: this._tasks[index].date,
		}
		this._tasks.splice(index, 1, edited)
	}

	__getDate() {
		const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
		let date = new Date()
		return date.toLocaleDateString(undefined, options)
	}
}
