import React from 'react'

function Filter() {
	return (
		<section className="filters">
			<div className="filters__block">
				<form className="form">
					<fieldset className="form__group">
						<legend role="contentinfo">
							<h4 className="form__group-title">Сортировка</h4>
						</legend>
						<label className="form__radio" htmlFor="new">
							<input type="radio" name="sort" id="new"/> Новые
							<span className="form__radio-checkmark"></span>
						</label>
						<label className="form__radio" htmlFor="old">
							<input type="radio" name="sort" id="old"/> Старые
							<span className="form__radio-checkmark"></span>
						</label>
					</fieldset>
				</form>
			</div>

			<div className="filters__block">
				<form className="form">
					<fieldset className="form__group">
						<legend>
							<h4 className="form__group-title">Приоритет</h4>
						</legend>
						<label className="form__checkbox" htmlFor="low">
							<input type="checkbox" name="priority" id="low"/> Low
							<span className="form__checkbox-checkmark"></span>
						</label>
						<label className="form__checkbox" htmlFor="norm">
							<input type="checkbox" name="priority" id="norm"/> Normal
							<span className="form__checkbox-checkmark"></span>
						</label>
						<label className="form__checkbox" htmlFor="high">
							<input type="checkbox" name="priority" id="high"/> High
							<span className="form__checkbox-checkmark"></span>
						</label>
					</fieldset>
				</form>

				<form className="form">
					<fieldset className="form__group">
						<legend>
							<h4 className="form__group-title">Отметка</h4>
						</legend>
						<label className="form__checkbox" htmlFor="research">
							<input type="checkbox" name="mark" id="research"/> Research
							<span className="form__checkbox-checkmark"></span>
						</label>
						<label className="form__checkbox" htmlFor="design">
							<input type="checkbox" name="mark" id="design"/> Design
							<span className="form__checkbox-checkmark"></span>
						</label>
						<label className="form__checkbox" htmlFor="dev">
							<input type="checkbox" name="mark" id="dev"/> Development
							<span className="form__checkbox-checkmark"></span>
						</label>
					</fieldset>
				</form>
			</div>
		</section>
	)
}

export default Filter
