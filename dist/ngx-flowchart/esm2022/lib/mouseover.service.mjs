export class FcMouseOverService {
    constructor(applyFunction) {
        this.mouseoverscope = {
            connector: null,
            edge: null,
            node: null
        };
        this.applyFunction = applyFunction;
    }
    nodeMouseOver(event, node) {
        return this.applyFunction(() => {
            this.mouseoverscope.node = node;
        });
    }
    nodeMouseOut(event, node) {
        return this.applyFunction(() => {
            this.mouseoverscope.node = null;
        });
    }
    connectorMouseEnter(event, connector) {
        return this.applyFunction(() => {
            this.mouseoverscope.connector = connector;
        });
    }
    connectorMouseLeave(event, connector) {
        return this.applyFunction(() => {
            this.mouseoverscope.connector = null;
        });
    }
    edgeMouseEnter(event, edge) {
        this.mouseoverscope.edge = edge;
    }
    edgeMouseLeave(event, edge) {
        this.mouseoverscope.edge = null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2VvdmVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmxvd2NoYXJ0L3NyYy9saWIvbW91c2VvdmVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGtCQUFrQjtJQVU3QixZQUFZLGFBQWtEO1FBUjlELG1CQUFjLEdBQW1CO1lBQy9CLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7UUFLQSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQWlCLEVBQUUsSUFBWTtRQUNsRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxZQUFZLENBQUMsS0FBaUIsRUFBRSxJQUFZO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1CQUFtQixDQUFDLEtBQWlCLEVBQUUsU0FBc0I7UUFDbEUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sbUJBQW1CLENBQUMsS0FBaUIsRUFBRSxTQUFzQjtRQUNsRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxjQUFjLENBQUMsS0FBaUIsRUFBRSxJQUFZO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQWlCLEVBQUUsSUFBWTtRQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmNDb25uZWN0b3IsIEZjRWRnZSwgRmNOb2RlIH0gZnJvbSAnLi9uZ3gtZmxvd2NoYXJ0Lm1vZGVscyc7XG5cbmV4cG9ydCBjbGFzcyBGY01vdXNlT3ZlclNlcnZpY2Uge1xuXG4gIG1vdXNlb3ZlcnNjb3BlOiBNb3VzZU92ZXJTY29wZSA9IHtcbiAgICBjb25uZWN0b3I6IG51bGwsXG4gICAgZWRnZTogbnVsbCxcbiAgICBub2RlOiBudWxsXG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhcHBseUZ1bmN0aW9uOiA8VD4oZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gVCkgPT4gVDtcblxuICBjb25zdHJ1Y3RvcihhcHBseUZ1bmN0aW9uOiA8VD4oZm46ICguLi5hcmdzOiBhbnlbXSkgPT4gVCkgPT4gVCkge1xuICAgIHRoaXMuYXBwbHlGdW5jdGlvbiA9IGFwcGx5RnVuY3Rpb247XG4gIH1cblxuICBwdWJsaWMgbm9kZU1vdXNlT3ZlcihldmVudDogTW91c2VFdmVudCwgbm9kZTogRmNOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGdW5jdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLm1vdXNlb3ZlcnNjb3BlLm5vZGUgPSBub2RlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5vZGVNb3VzZU91dChldmVudDogTW91c2VFdmVudCwgbm9kZTogRmNOb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlGdW5jdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLm1vdXNlb3ZlcnNjb3BlLm5vZGUgPSBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3Rvck1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQsIGNvbm5lY3RvcjogRmNDb25uZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseUZ1bmN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMubW91c2VvdmVyc2NvcGUuY29ubmVjdG9yID0gY29ubmVjdG9yO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3Rvck1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQsIGNvbm5lY3RvcjogRmNDb25uZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBseUZ1bmN0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMubW91c2VvdmVyc2NvcGUuY29ubmVjdG9yID0gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBlZGdlTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCwgZWRnZTogRmNFZGdlKSB7XG4gICAgdGhpcy5tb3VzZW92ZXJzY29wZS5lZGdlID0gZWRnZTtcbiAgfVxuXG4gIHB1YmxpYyBlZGdlTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCwgZWRnZTogRmNFZGdlKSB7XG4gICAgdGhpcy5tb3VzZW92ZXJzY29wZS5lZGdlID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vdXNlT3ZlclNjb3BlIHtcbiAgY29ubmVjdG9yOiBGY0Nvbm5lY3RvcjtcbiAgZWRnZTogRmNFZGdlO1xuICBub2RlOiBGY05vZGU7XG59XG4iXX0=