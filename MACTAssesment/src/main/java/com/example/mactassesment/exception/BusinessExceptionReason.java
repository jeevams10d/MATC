package com.example.mactassesment.exception;

public enum BusinessExceptionReason {
	
	MOBILE_NUMBER_NOT_FOUND("mobile number not found");
	
	
	String code ;
	String message;
	
	BusinessExceptionReason(String message) {
		this.message=message;
	}
	
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

}
