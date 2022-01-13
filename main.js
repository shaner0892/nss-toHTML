{/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */}

// You need to define a function that takes that object as input (needs a 
// parameter), and outputs (returns) the following HTML representation of 
// that computer.

const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const toHtml = (computerObject) => {
    const toHtmlSection = 
    `<section id="computer--${computerObject.id}">
        <h1>${computerObject.manufacturer} ${computerObject.make}</h1>
        <div>Model: ${computerObject.model}</div>
        <div>Memory: ${computerObject.specs.memory} GB</div>
        <div>Hard drive space: ${computerObject.specs.hardDrive}</div>
        <div>Processor speed: ${computerObject.specs.processor} Ghz</div>
    </section>`
    return toHtmlSection
}
const stringReturnedFromFunction = toHtml(computer)
console.log(stringReturnedFromFunction)