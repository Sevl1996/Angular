<div class="row-fluid">
	<div class="span1">
	</div>
		<div class="span10">
		

		<table ng-table="usersTable" class="table table-striped" show-filter="true">
		   <tr ng-repeat="user in $data">
		       <td title="'Title'" sortable="'Title'" filter="{ 'Title': 'text' }">
		           {{user.Title}}
		       </td>
		       <td title="'Address'" sortable="'Address'" filter="{ 'Address': 'text' }">
		           {{user.Address}}
		       </td>    
		       <td title="'Type'">
		           {{user.Type}}
		       </td>    
		       <td title="'Cost($)'">
		           {{user.Cost}}
		       </td>    
		       <td title="'Square'" >
		           {{user.Square}}
		       </td>    
		   </tr>
		</table>


		</div>
	<div class="span1">
	</div>
</div>