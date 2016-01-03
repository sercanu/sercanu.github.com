{:title "Misc"
 :layout :page
 :page-index 3
 :navbar? true}

<div ng-controller="dailyAppCtrl">

### Workouts

<div class="row">
<div class="col-md-5"><b>Workout</b></div>
<div class="col-md-2"><b>Distance</b></div>
<div class="col-md-2"><b>Time</b></div>
<div class="col-md-3"><b>Date</b></div>
</div>
<div class="row" ng-repeat="workout in filtered=(workouts | orderBy: 'date':true)">
<div class="col-md-5">{[{workout.desc}]}</div>
<div class="col-md-2">{[{workout.distance}]}</div>
<div class="col-md-2">{[{workout.time}]}</div>
<div class="col-md-3">{[{workout.date}]}</div>
</div>

### Quotes
<div class="row">
<div class="col-md-8"><b>Quote</b></div>
<div class="col-md-4"><b>By</b></div>
</div>
<div class="row" ng-repeat="quote in iltered=(quotes | orderBy: 'date':true)">
<div class="col-md-8">{[{quote.quote}]}</div>
<div class="col-md-4">{[{quote.who}]}</div>
</div>
</div>




