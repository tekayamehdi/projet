package com.projetAngular.spring.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetAngular.spring.repository.DonRepository;
import com.projetAngular.spring.exception.ResourceNotFoundException;
import com.projetAngular.spring.models.Don;



@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/test")
public class DonController {
	   @Autowired
	    private DonRepository donRepository;
	    @GetMapping("/dons")
	    public List<Don> getAllDons() {
	        return donRepository.findAll();
	    	    
	    }
	    
	    @PostMapping("/dons")
	    public Don createDon(@Valid @RequestBody Don don) {
	        return donRepository.save(don);
	    }
	    
	    
	    
	    @DeleteMapping("/dons/{id}")
	    public Map<String, Boolean> deleteDon(@PathVariable(value = "id") Long Id)
	         throws ResourceNotFoundException {
	        Don don= donRepository.findById(Id)
	       .orElseThrow(() -> new ResourceNotFoundException("don not found for this id :: " + Id));

	        donRepository.delete(don);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
}
