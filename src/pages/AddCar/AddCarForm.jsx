import React from 'react';
import InputColor from 'react-input-color';

function AddCarForm() {
	const [color, setColor] = React.useState({});

	return (
		<form className='add-form'>
			<div className="relative z-0 mb-6 w-fit group">
				<input
					type="text"
					name="floating_name"
					id="floating_name"
					className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_name"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Name
				</label>
			</div>
			<div className="relative z-0 mb-6 w-fit group">
				<input
					type="text"
					name="floating_password"
					id="floating_password"
					className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_password"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Type
				</label>
			</div>
			<div className="relative z-0 mb-6 w-fit group">
				<input
					type="text"
					name="repeat_password"
					id="floating_repeat_password"
					className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
					placeholder=" "
					required
				/>
				<label
					for="floating_repeat_password"
					className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Brand
				</label>
			</div>
			<div className="grid md:grid-cols-1">
				<div className="relative z-0 mb-6 w-fit group">
					<input
						type="text"
						name="floating_url"
						id="floating_url"
						className="block py-2.5 px-0 w-fit text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600 peer"
						placeholder=" "
						required
					/>
					<label
						for="floating_url"
						className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-600 peer-focus:dark:text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Add the url of an Image
					</label>
				</div>
				<div className="flex-column z-0 mb-6 w-fit group">
					<input
						type="text"
						name="floating_last_name"
						value={color.hex}
						id="floating_last_name"
						className="block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-lime-500 focus:outline-none focus:ring-0 focus:border-lime-600"
						placeholder=" "
						required
					/>
					Color
					<label className="">
						<div>
							<InputColor initialValue="#5e72e4" onChange={setColor} placement="right" />
						</div>
					</label>
				</div>
			</div>
			<button
				type="submit"
				className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center submit-button"
			>
				Submit
			</button>
		</form>
	);
}

export default AddCarForm;
