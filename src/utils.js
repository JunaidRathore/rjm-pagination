const paginate = (followers) => {
	const itemsPerPage = 10
	const NumberOFPage = Math.ceil(followers.length / itemsPerPage)
	const newFoloow =  Array.from({length:NumberOFPage}, (_,index)=>{
		const start = index * itemsPerPage
		return followers.slice(start,start + itemsPerPage)
	})
	return newFoloow
}

export default paginate
