package com.example.mactassesment;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import com.example.mactassesment.exception.BusinessException;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import com.example.mactassesment.entity.Person;
import com.example.mactassesment.repository.PersonRepository;
import com.example.mactassesment.services.PersonServices;

@SpringBootTest(classes = MactAssesmentApplication.class)
@RunWith(MockitoJUnitRunner.class)
class MactAssesmentApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@InjectMocks
	PersonServices personService;
	@Mock
	PersonRepository personRepository;
	
	
	@Test
	void insertPersonTest() {
		Person person = new Person();
		person.setPersonId(1);
		person.setEmail("info2sakthi1@gmail.com");
		person.setMobileNumber("63818009898");
		person.setPassWord("sakthi123");
		person.setUserName("sakthi");
		personService.inserPersonDetails(person);
		verify(personRepository, times(1)).save(person);
	}
	@Test
	void getAllPersonTest() {
		List<Person> personList = new ArrayList<>();
		Person person1 = new Person(1, "sakthi123", "sakthi", "info2sakthi1@gmail.com","6381800989");
		Person person2 = new Person(2, "jeeva123", "jeeva", "info2jeeva1@gmail.com", "6381800988");
		personList.add(person1);
		personList.add(person2);
		
		PageRequest paging = PageRequest.of(0, 10, Sort.by("id"));
		
		Page<Person> pagedTasks = new PageImpl(personList);
		Page<Person> pro= Mockito.mock(Page.class);		
		when(personRepository.findAll(paging)).thenReturn(pagedTasks);
		List<Person> expected = personRepository.findAll(paging).getContent();
		assertEquals(personList,expected);
		verify(personRepository,times(1)).findAll(paging);
	}
	


	
	

}
