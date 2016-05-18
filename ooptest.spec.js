// This is a test code for "bootday2.js" in c/mybootcamp

var app = new NotesApplication();

describe("Author's Name", function(){
	it('Should return the Name of Author', function(){
		expect(NotesApplication("Author")).toBe("Author");
	});

	it('Should return a string', function(){
		expect(NotesApplication.prototype.create(5)).toBe("Note content should be strigs. Try again");
	});

	//it('Should return a string', function(){
	//	expect(NotesApplication.prototype.create(5)).toBe("Note content should be strigs. Try again");
	//});

});
