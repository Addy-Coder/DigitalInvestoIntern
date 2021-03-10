package intern;

import java.util.Scanner;

	public class MissingValue {
		
		public static int findMissingValue(int arr[], int n) {
			int temp = ((n+1)*(n+2))/2;
			for(int i =0;i<n;i++) {
				temp -= arr[i];
			}
			return temp;
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
			
			MissingValue obj = new MissingValue();
			System.out.println("Missing value is : "+obj.findMissingValue(arr, n));
			
			
		}
}
