package com.projetAngular.spring.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "typedon")
public class TypeDon {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer TypeId; 

@Enumerated(EnumType.STRING)
@Column(length = 20)
private ETypeDon nom;
public Integer getId() {
	return TypeId;
}
public void setId(Integer TypeId) {
	this.TypeId = TypeId;
}
public ETypeDon getNom() {
	return nom;
}
public void setNom(ETypeDon nom) {
	this.nom = nom;
}

}
