package tn.esprit.spring.entities;

import javax.persistence.*;


@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long UserId;
    private String name;
    private String email;
    private String password;
    private long phoneNumber;
    
    
	public User() {}
	public User(long Userid,String Name, String Email)
	{	
		this.UserId=Userid;
		this.name=Name;
		this.email=Email;
	}
	public User(String Name,String Email)
	{this.name=Name;
	this.email=Email;}
    public Long getId() {
		return UserId;
	}
	public void setId(Long id) {
		this.UserId = id;
	}
	public String getName() {
		return name;
	}
	public void setname(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String Email) {
		this.email = Email;
	}

}