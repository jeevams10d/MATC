package com.example.mactassesment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mactassesment.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
