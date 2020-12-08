package com.projetAngular.spring.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

	@Entity
	@Table(	name = "don")
	public class Don {

		    
		    @Id
		    @GeneratedValue(strategy = GenerationType.AUTO)
		    private long DonId;
			private String description;
			@ManyToMany(fetch = FetchType.LAZY)
			@JoinTable(	name = "typedon", 
						joinColumns = @JoinColumn(name = "don_id"), 
						inverseJoinColumns = @JoinColumn(name = "typeId"))
			private Set<Role> roles = new HashSet<>();
		    public long getDonId() {
				return DonId;
			}
			public void setDonId(long donId) {
				DonId = donId;
			}
			public String getDescription() {
				return description;
			}
			public void setDescription(String description) {
				this.description = description;
			}
		    


			}

