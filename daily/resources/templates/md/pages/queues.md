{:title "Queues"
 :layout :page
 :page-index 2
 :navbar? true}


<div ng-controller="dailyAppCtrl">
<form role="form">
<label ng-repeat="cat in getCategories('queues')" class="checkbox-inline">
<b><input type="checkbox" ng-model="filter[cat]" /> {[{cat}]}</b>
</label>
</form>
<div style="height:10px"></div>

<div class="row">
<div class="col-md-4"><b>Link</b></div>
<div class="col-md-2"><b>Category</b></div>
<div class="col-md-3"><b>Added</b></div>
<div class="col-md-3"><b>Completed</b></div>
</div>

<div class="row" ng-repeat="link in filtered=(queues | filter:filterByCategory | orderBy: 'date':true)">
<div class="col-md-4"><a ng-href="{[{link.url}]}" target="_blank">{[{link.link}]}</a></div>
<div class="col-md-2">{[{link.category}]}</div>
<div class="col-md-3">{[{link.date}]}</div>
<div class="col-md-3">{[{link.completedOn}]}</div>
</div>

</div>