import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor (){
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.headerTop = $('.large-hero');
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a')
    this.createPageSectionWaypoints();
    this.deleteWaypoints();
    this.addSmoothScrolling();

  }

    addSmoothScrolling() {
      this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
      var header = this.siteHeader;
      new Waypoint({
        element: this.headerTriggerElement[0],
        handler: function(direction) {
          if (direction == "down") {
            header.addClass("site-header--dark");
          }
          else {
            header.removeClass("site-header--dark");
          }
        }
      });
    }

    createPageSectionWaypoints() {
      var headerLink = this.headerLinks;
      this.pageSections.each(function() { //.each works as .map and it takes a function as an argument
        var currentPageSection = this;
        new Waypoint({
          element: currentPageSection,
          handler: function(direction) {
            if (direction == "down"){
              var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            headerLink.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
            }
          },
          offset: "18%"
        });

        new Waypoint({
          element: currentPageSection,
          handler: function(direction) {
            if (direction == "up"){
              var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            headerLink.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
            }
          },
          offset: "-40%"
        });
      })
    }

    deleteWaypoints() {
      var headerLink = this.headerLinks;
      new Waypoint({
        element: this.headerTop[0],
        handler: function(direction) {
          if (direction == "up"){
          headerLink.removeClass("is-current-link");
          }
        },
        offset: "-20%"
      });
    }
}

export default StickyHeader;
