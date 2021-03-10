package intern;

import java.util.Scanner;

public class DuplicateElements {
	
	void findDuplicates(int arr[], int n) {
		System.out.println("The elements which reaapear are : ");
		for(int i=0;i<n;i++) {
			int temp = Math.abs(arr[i]);
			if(arr[temp] >= 0) {
				arr[temp] = -arr[temp];
			}
			else {
				System.out.print(temp+" , ");
			}
		}
	}
	
	public static void main(String args[]) {
		int n;
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the Number of elements");
		n = sc.nextInt();
		int arr[] = new int[n];
		System.out.println("Enter the Array : ");
		for(int i = 0; i<n; i++) {
			arr[i] = sc.nextInt();
		}
		
		DuplicateElements ob = new DuplicateElements();
		ob.findDuplicates(arr, n);
	}
}
