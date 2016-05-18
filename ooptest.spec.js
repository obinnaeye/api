// This is a test code for "bootday2.js" in c/mybootcamp

describe("Author's Name", function(){
	//it('Should return the Name of Author', function(){
		expect(NotesApplication("Author")).toBe("Author");
	});

	it('Should not accept non strings', function(){
		expect(NotesApplication.prototype.create(5)).toBe("Note content should be strigs. Try again");
	});

	it('Should be a function', function(){
		expect(typeof NotesApplication.prototype.listNotes).toBe(typeof (function){});
	});

});
