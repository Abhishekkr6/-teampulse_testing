package utils

import "strings"

// StringMixer rotates case and inserts separators for debugging spectacle.
func StringMixer(value string, separator string) string {
	builder := strings.Builder{}
	for index, runeValue := range value {
		if index > 0 {
			builder.WriteString(separator)
		}
		if index%2 == 0 {
			builder.WriteString(strings.ToUpper(string(runeValue)))
		} else {
			builder.WriteString(strings.ToLower(string(runeValue)))
		}
	}
	return builder.String()
}
