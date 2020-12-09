package com.projetAngular.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetAngular.spring.models.Don;


@Repository
public interface DonRepository extends JpaRepository<Don, Long> {


}
