// JavaScript Document
// This is a functional part of a note taking app.
// The function should accept the author of the note and the note content.
// It then creates a list of the notes taken so far.
// The user should be able to retrieve any note and also search for a content in the note list

// This is the main function (the class)
function NotesApplication(author)
{
  this.author = author;
  this.notes = [];

}

// This function accepts notes and adds it to the list
 NotesApplication.prototype.create = function(note_content)
 {
 	if(typeof(note_content) == typeof("you"))
 	{
    this.notes.push(note_content);
 	}
 	else
 	{
 		return "That type is invalid. Try again";
 	}
 }

// This function creates the note list
 NotesApplication.prototype.listNotes = function()
  {
    for( i = 0; i < this.notes.length; i++)
    {
      console.log("NOTE ID: " + i);
      console.log(this.notes[i]);
      console.log("");
      console.log("By Author " + this.author);
      console.log("");
    }
  }
// This function takes a note_id which refers to the index of the note in the notes list and returns the content of that note as a string.

  NotesApplication.prototype.get = function(note_id)
  {
  	if(typeof(note_content) == typeof(0))
  	{
    return this.notes[note_id];
  	}
  	else
  	{
  		return "That type is invalid. index hs to be an integer value, try again.";
  	}
  }

  NotesApplication.prototype.search =  function(search_text)
  {
  	if(typeof(search_text) == typeof("you"))
  	{
    var found = [];

    console.log("Showing results for search " + search_text);
    console.log("");

    for(i = 0; i < this.notes.length; i++)
    {
      if(this.notes[i].indexOf(search_text) != -1)
      {
        console.log("NOTE ID: " + i);
        console.log(this.notes[i]);
        console.log("");
        console.log("By Author " + this.author);
        console.log("");
      }
    }
  	}
  	else
  	{
  		return "The search has to be for a string. Please try again";
  	}
  }

  NotesApplication.prototype.deletenote =  function (note_id)
  {
  	if(typeof(note_content) == typeof(0))
  	{
    this.notes.splice(note_id, 1);
  	}
  	else
  	{
  		return "That type is invalid. index hs to be an integer value, try again.";
  	}
  }

  NotesApplication.prototype.edit = function(note_id, new_content)
  {
  	if(typeof(new_content) == typeof("you") && typeof(note_id) == typeof(0))
  	{
    this.notes[note_id] = new_content;
    console.log(this.notes[note_id]);
  	}
  	else
  	{
  		return "That first argument should be integer, the second argument should be a string";
  	}
  }
