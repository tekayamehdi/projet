package com.projetAngular.spring.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

	@Entity
	@Table(	name = "don")
	public class Don {

		    
		    @Id
		    @GeneratedValue(strategy = GenerationType.AUTO)
		    private long DonId;
			private String donDescription;
			private String typeDon;
			
		    public String getTypeDon() {
				return typeDon;
			}
			public void setTypeDon(String typeDon) {
				this.typeDon = typeDon;
			}
			public long getDonId() {
				return DonId;
			}
			public void setDonId(long donId) {
				DonId = donId;
			}
			public String getdonDescription() {
				return donDescription;
			}
			public void setdonDescription(String donDescription) {
				this.donDescription= donDescription;
			}
		    


			}

