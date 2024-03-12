//simple class for task..

//import other files 

public class Task {
  private String title;
  private String status; 

  //more 
  private String description;
  private Priority priority;
  private Date createdDate;
  private boolean completed = false;

  //properties of tasks above ^

  // Constructor for the task.. takes current date 
  public Task(String title, String description, Priority priority) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.createdDate = new Date(); // Assume this captures the current date-time
  }

  //creates a new task object 
  public Task(Task another) {
    this.title = another.title;
    this.description = another.description;
    this.priority = another.priority;
    this.createdDate = (Date) another.createdDate.clone(); // Clone the Date object
  }

  // Getter and Setter methods for taskk object 
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Priority getPriority() {
    return priority;
  }

  public void setPriority(Priority priority) {
    this.priority = priority;
  }

  public Date getCreatedDate() {
    return createdDate;
  }

  
//below helps mark tasks as complete 
  public void markAsComplete() {
    this.completed = true;
  }

  public boolean isCompleted() {
    return completed;
  }

  public class TaskUpdater {

    public void updateTitle(String newTitle) {
      title = newTitle;
    }

    public void updateDescription(String newDescription) {
      description = newDescription;
    }

    public void updatePriority(Priority newPriority) {
      priority = newPriority;
    }
  }

  public TaskUpdater getUpdater() {
    return new TaskUpdater();
  }

  @Override
  public String toString() {
    return "Title: " + title + ", Description: " + description + ", Priority: " + priority + ", Created on: "
        + createdDate;
  }
}
