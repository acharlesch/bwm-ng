import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService{
	
	private rentals: Rental[] = [
		{
			id: "1",
			title: "Central Apartment",
			city: "New York",
			street: "Times Square",
			category: "Apartment",
			image: "http://via.placeholder.com/350x250",
			bedrooms: 2,
			description: "Centrally located",
			dailyRate: 34,
			shared: false,
			createdAt: "24/12/2018"
		},
		{
			id: "2",
			title: "Central House",
			city: "New York",
			street: "Times Square",
			category: "House",
			image: "http://via.placeholder.com/350x250",
			bedrooms: 3,
			description: "Centrally located house",
			dailyRate: 59,
			shared: false,
			createdAt: "1/12/2019"
		},
		{
			id: "3",
			title: "East Apartment",
			city: "Austin",
			street: "34th",
			category: "Apartment",
			image: "http://via.placeholder.com/350x250",
			bedrooms: 1,
			description: "Conveniently located",
			dailyRate: 28,
			shared: true,
			createdAt: "24/30/2018"
		},
		{
			id: "4",
			title: "SF Condo",
			city: "San Francisco",
			street: "Castro",
			category: "Condo",
			image: "http://via.placeholder.com/350x250",
			bedrooms: 2,
			description: "Centrally located",
			dailyRate: 65,
			shared: false,
			createdAt: "24/29/2018"
		}
	];

	public getRentalById(rentalId: string): Observable<Rental>{
		return new Observable<Rental>((observer) => {
			setTimeout(() => {
				const foundRental = this.rentals.find((rental) => {
					return rental.id === rentalId;
				});
				observer.next(foundRental);
			}, 500);
		})
	}

	public getRentals(): Observable<Rental[]> {
		return new Observable ((observer) => {
			setTimeout(() => {
				observer.next(this.rentals);
			}, 1000);
		});
	}
}