const API_BASE_URL = 'https://api.mapbox.com/search/searchbox/v1';
const accessToken = process.env.EXPO_PUBLIC_MAPBOX_TOKEN;
export async function getSuggestions(input: string, session_token: string) {
  const response = await fetch(
    `${API_BASE_URL}/suggest?q=${input}&language=en&proximity=-73.990593,40.740121&session_token=${session_token}&access_token=${accessToken}`
  );

  const json = await response.json();
  return json;
}

export const retrieveDetails = async (id: string, session_token: string) => {
  const response = await fetch(
    `${API_BASE_URL}/retrieve/dXJuOm1ieHJldDo2cEJoNE9DOThWTXVXWEJBNUx2TVVhZmlrd2lMbTlMMVliT19ucXAwYUxJdFZNcDNyZlY5anI0UVlBb3JOajVweUYzM2o4QlpKMTVxX0c5M29JZjI0WlJXa3FidFl5azN0elJqbXI2Ynl4enRQTzc5ZWZvTGNUeXh0bkFKaUl3Nk9NSXJ0blZlbW5xMEVFSzNIOFQ0TUJXbWNKMVZFVEd6NmRoaXJGOUFYU2FVYzV0cG5GdkpzWkFBbno3cjZGSnBKbXA1TF9yajlOendjLWczNERPWnBnUlJ4c2h3TDAzZU02RE5lampDQ0lXN3k4cS1palRtNEttYnU1a2IwbUNOQVRwZV9FOXE2V0VNT2dsa0JsUTlyWXpiajhrbmtjMFNxdUFFNnc2QjQ5MElkWmRfZmNfY0V6bEcyNG16eDUxWTlhYmJNbml6ak45eUF2d0hld1BfOU5EMkxrNHJKOFF4d3lqUjh0WFBUNHU5TkNFcnlnS3JrS2pDT0ZoRlNUdGhlQlRNOU9UX2VHUGFzbEl5T1AxRDUyU3RINUhCejB6T2d2c3p3by0zc20wWlJOaGlmU3hqX1MtYjd6U1J2a1pPdmlYNmtibVVxYTM1OWNlTVctR1BCUjlkQWVuOUlqVWZNNVA4dExoS1d4UHR3LXhDVUpYUmZQVWpiUERIc3NWOVc3Q3NTVXYzQ2VlZ1N2T2RsM2xUWlNvRUMwUG1qMVFQOEduRnI1SzFlQjIxRlMtZkowWkdEYkFWc3ZUQmlxQThnRjlGOEwtU2xXTWY4cmZkY3dtdzVWQldOYkMwMktDaUxManRZZzVrVkNlekJjVHh4SHM2d2Zaa0MxcGoxOGh2OEg4M3NIQ29FOHhNZ2V3WHRjZk5YSWFXTFZ2Zm42Z0E5YTNCNU9CYTFFb29QUjFrUEwzNlh6bUxKOWRjZGhvWC1BQlE2T1VNRFpFMFBOQUtFRHBRZlpRS3A0aUpIbzluM3FCajV6S2YtVlBWcHBiOGlRbUp3c0RhakJLeHUxNXBaTC1fWU9PLTZod3otSFEtamN2bkNDZUw1MUwwT191STZseHpIc3RhMXlUSlYtQVBHTF9uZndWQ0RxcHI5WUFQaHJRYUdxN3NqQlpoQjlabVRxem12Q3BGdlhadHpxaEhxUk9GVEp0OEhMTzc3ZDJZejcyYzJGektfZ08tSjkzSFBia3RWOXdSNURwSVhLTHNrdWZEZnhiRTdJTXVPcWlnV0lmXzhQSjZZRk5MOE1pdHVJckJzVTdfdHhfdmZ1QTFDQ0tXckttbUQ5UGxpRDVla0J4anZVX0lhOXJvalpGMmVBSFNoVXRucl8tdG1xUGxEbnB2c290N1JRX3NqVHlINndydXJPbzd3WmRzVG5tMUtBVVNaY0pJYnZHRk9YLXlxNW1mSnJfeThVak1qRGNaWHpQdE84QmlYdEd2aE1sVUoxcEUxQWtpbWhVVGNCV3QzdG9TaGdQZWtHT2xqV2pKWlE2dXBRZnlob2pydFZXZktMZHBBeWhwMVp1cDNobjMzd2NtOHZCcklEazZkWDNHZElZWHItTWRYampTa1EwRWNhbGlfdFpwTTRBTlJYOXF2THhTRmJnUVZTY2R0MnFILWtOc2dseGpiUFZ4NjRnekpLRktXVTFxd21CZmVGbDUzeFg4eGQ1UEl2REliQTJNeDJxeVNJcDBodGdGNEhFM00wUDcyQXRqNkRyOXMzdmh4VGpveGg3Qm9qM1pCRmNiRkEwQjF5bjRUMm91eU1KNlhmbXZqNTNQU2tSSndPdG5oUjU2VEFIWHYwX0N4TXV5aEJTbjJabE9fNGhMZlRGbENWZVJSZnlRNTYtRTltNXZrMWMtZWR2UHZPSjlDa05yUE56d3o3MzNIcG9XVVVXcnlKM0hYM0huNHNsOVdMUzk4VkFyYXozTVFnYm96eWFJUVRwREItRVViRGR3MXVlTjRvVG9WYXVzYUlaWVJaT3djek9TcV9YYXF3MklNYkdHd3RSUWRORDAxd3YyN2dvRGJHVlJEME9sdS00bUFhMmVHQTJ1SXZUZWpaNDBvVWZJNE9HWXRFQVdkcHZkaWlwTTJabnc3NWhCQXBJVWlKRXNhMlhfRklLUVdKd2JDTzN6bGRiN1lxZHhQSUNfTkJMakFBd1FmQ3RSTnVhelN1WjBmRXM1NmcyQVRlQzFZU0xnTS1JMTlBUjNHOE15WHhiUzd3eDdVd1BFemhJOHFlZFhCa2wzeGdnU0kyNjl0NFExbnBsQkFEeWZNdHlBUW1ISXdMc1Y4ZlRPYTFNdUVacXlLT1loUlViaEZGeFJ4NHBaYVlxZ3RlY0Q0RXhEXy1SYVlZM1QtTWdzNWlwc3h2c2h5WFFkQjk5Z19TRnR4RllBaFZhWmdtSFJUV05JTjRKNTBpMGZLMFpEMy10N1JuWE5QQ3RPNm96NmFPMG14NXgzTjFiNTBYcHlWMDRGNExEakx6SzlYSkVtV2s4U0owbGhYZDV3Yk9rR2hJWGFJTmg1Sk92aWZnSGRveU8zLW5Cd3JSWVFTRW8wcmhqZlRYQTlGWnhKempWemdZNGpWUGlobkZ2N0JaVXVHRXp5N21JVTVpUjVKOTJwRUNrb3hzNTBJVlFiUmRjZklJVThvUFJEOE12Rm1MZ0MwZDdHa3p5NVd0SndnbmFvVi1fZ3ROV3A5NzVsbWhlQ28tM0MzWHNEbkZaVl9jZ3d0azVraDlOazZkTnR1OGt0Nk9PRkNNbEZfOTQ2WTZwWDJ2UlBBY29yeC1uaGJia0VsdjB4TXIwNUxuWXM4X0xrLXJyU1lIa0JtWFZDLUR4MGJZd0t0VlVXOWE2R2dQSVJRdGFJNmlPclRjbFdFWTFZcTRxZUJzMGUxSHRmVXpZbERNb3dZS0xUSjMtR29Fc3o1S0VPNjRWbjNMNm9qYk5fOFhJWFc5NXlERDA3eEVxSzJVS2ZEWHFDcWtPUU9VQmlhTWNMTjN0Rkp4dXc=?session_token=${session_token}&access_token=${accessToken}`
  );
  const json = await response.json();
  return json;
};
