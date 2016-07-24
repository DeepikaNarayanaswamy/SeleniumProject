<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class = "header">
Welcome <%= session.getAttribute("username") %>
<c:out value = "deepika"/>
</div>