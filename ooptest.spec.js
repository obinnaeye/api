// This is a test code for "bootday2.js" in c/mybootcamp

describe("Author's Name", function(){
	it('Should return the Name of Author', function(){
		expect(NotesApplication("Author")).toBe("Author");
	});

	it('Should return the Name of Author', function(){
		expect(NotesApplication("Author")).toBe("Author");

	it('Should not accept non strings for search item', function(){
		expect(NotesApplication.prototype.search(5)).toBe("Search item should be string. Please try again");
	});

	it('Should be a function', function(){
		expect(typeof(NotesApplication.prototype.create)).toBe(typeof(function(){}));
	});

	it('Should be a function: edit', function(){
		expect(typeof(NotesApplication.prototype.edit)).toBe(typeof(function(){}));
	})

	
});
