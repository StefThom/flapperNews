/**
 * Created by in134bel on 27-1-2015.
 */
angular.module('flapperNews', [])
    .controller('MainCtrl', [
        '$scope', function ($scope) {
            $scope.test = 'Hello World!';
            $scope.posts = [
                {title: 'post 1', link: 'Link 1', upvotes: 5},
                {title: 'post 2', link: 'Link 2', upvotes: 2},
                {title: 'post 3', link: 'Link 3', upvotes: 15},
                {title: 'post 4', link: 'Link 4', upvotes: 9},
                {title: 'post 5', link: 'Link 5', upvotes: 4}
            ];

            // Toevoegen van een post
            $scope.addPost = function(){
                if(!$scope.title || $scope.title === '') {
                    return;
                }

                $scope.posts.push({
                    title: $scope.title,
                    link: $scope.link,
                    upvotes: 0});
                $scope.title = '';
                $scope.link = '';
            };
            // Liken van een een post
            $scope.incrementUpvotes = function(post) {
                post.upvotes += 1;
            };
        }]);