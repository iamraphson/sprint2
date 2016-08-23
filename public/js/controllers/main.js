
app.controller('MainCtrl', function($scope, Upload){

	 // upload on file select or drop
    $scope.upload = function (file) {
    	var data = {};

        Upload.upload({
        	url: '/api/candidates/uploads',
            method: 'POST',
  			data: data, // Any data needed to be submitted along with the files
  			file: file
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
});