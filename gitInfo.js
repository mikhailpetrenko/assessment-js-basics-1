/*
    For this section of the assessment you will be putting together 
    a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a version control system that helps developers track changes and \
collaborate on projects. It allows multiple people to work on the same codebase, \
keeps a record of all modifications, and enables tease branching, merging, and reverting of code";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "A web-based platform designed for version control and collaboratio \
 on software development projects. It provides a centralized repository for code storage, \
 tracking changes, managing issues, and facilitating collaboration among developers \
  through features like pull requests and code reviews"

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
let gitInitDefinition = "is used to initialize a new Git repository \
 in a directory. It creates a new empty repository, sets up the necessary files and directories \
 for version control, and prepares the directory to start tracking changes to files using Git"

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
let gitCloneDefinition = "creates a local copy of a remote Git repository \
 on the user's machine, including all the files, branches, and commit history."
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
let gitStatusDefinition = "displays the current status of the Git repository, \
showing information about modified, staged, and untracked files, \
as well as the branch being worked on and any pending changes"
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
let gitAddDefinition = "is used to stage changes made to files in the Git repository. \
It adds modified or new files to the staging area, \
preparing them to be included in the next commit"

let gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
let gitCommitDefinition = "is used to create a new commit in the Git repository. \
It takes all the changes that have been staged (using 'git add') \
and records them as a new snapshot in the commit history.\
Each commit is accompanied by a commit message that describes the changes made"

let gitCommitCode = 'git commit -m "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
let gitPushDefinition = "the command, that is used to upload local commits to a remote \
 Git repository, synchronizing the changes and updating \
 the remote branch with the latest commits"